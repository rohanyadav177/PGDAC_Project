package hims.user.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import hims.user.jparepository.UserRepository;
import hims.user.model.User;

@CrossOrigin
@RestController
public class AuthController {

	@Autowired
	private UserRepository userRepository;

//	@PostMapping("/register")
//	public String register(@RequestBody User user) {
////		User existingUser = userRepository.findByEmail(user.getEmail());
////		System.out.println(existingUser);
////		if(existingUser!=null) {
//		userRepository.save(user);
////		}
//		return "Registration successful";
//	}

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody User user) {
		// Check if the email already exists in the database
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (existingUser != null) {
			// Email already registered, return error response
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered");
		} else {

			if (user.getUserType() == null || user.getUserType().isEmpty()) {
				user.setUserType("Normal");
				userRepository.save(user);
			} else {
				userRepository.save(user);
			}
			// Email not found, proceed with registration

			return ResponseEntity.ok("Registration successful");
		}
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User user) {
		User existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if (existingUser != null) {
			// Return the existing user object, including the user type
			return ResponseEntity.ok(existingUser);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}

	@PostMapping("/recover-password")
	public ResponseEntity<String> recoverPassword(@RequestBody User user) {
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (existingUser != null) {
			// Implement your password recovery logic here
			// For demonstration purposes, let's assume you want to return email and
			// password
			String response = "Email: " + existingUser.getEmail() + ", Password: " + existingUser.getPassword();
			return ResponseEntity.ok(response);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found. Password recovery failed");
		}
	}

	// Store generated OTPs temporarily (in-memory map)
//    private Map<String, String> otpMap = new HashMap<>();

//    @PostMapping("/send-otp")
//    public ResponseEntity<String> sendOTP(@RequestBody Map<String, String> requestBody) {
//        String mobileNo = requestBody.get("mobileNo");
//
//        // Generate OTP (6-digit random number)
//        String otp = generateOTP();
//
//        // Simulate sending OTP via SMS (replace this with actual SMS sending logic)
//        // For demonstration, just print OTP to console
//        System.out.println("OTP for " + mobileNo + ": " + otp);
//
//        // Store OTP in map for verification later
//        otpMap.put(mobileNo, otp);
//
//        return ResponseEntity.ok("OTP sent successfully");
//    }
//
//    @PostMapping("/verify-otp")
//    public ResponseEntity<String> verifyOTP(@RequestBody Map<String, String> requestBody) {
//        String mobileNo = requestBody.get("mobileNo");
//        String enteredOTP = requestBody.get("otp");
//
//        // Get OTP from map based on mobile number
//        String generatedOTP = otpMap.get(mobileNo);
//
//        if (generatedOTP != null && generatedOTP.equals(enteredOTP)) {
//            // OTP matched, clear OTP from map and proceed with registration or login
//            otpMap.remove(mobileNo);
//            return ResponseEntity.ok("OTP verified successfully");
//        } else {
//            // OTP didn't match, return error response
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP");
//        }
//    }
//
//	private String generateOTP() {
//		// Generate a random 6-digit OTP
//		Random random = new Random();
//		int otp = 100000 + random.nextInt(900000);
//		return String.valueOf(otp);
//	}

}
