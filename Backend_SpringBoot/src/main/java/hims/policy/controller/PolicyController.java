package hims.policy.controller;

import java.util.Collection;
import java.util.Collections;
//import java.util.List;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hims.policy.model.CoverageType;
import hims.policy.model.FamilyPolicy;
import hims.policy.model.IndividualPolicy;
import hims.policy.model.Policy;
import hims.policy.repository.FamilyRepository;
import hims.policy.repository.IndividualPolicyRepository;
import hims.policy.service.PolicyService;
import hims.policy.service.coverageService;

@CrossOrigin("*")
@RestController
//@RequestMapping("policy")
public class PolicyController {
	@Autowired
	private PolicyService policyServiceRef;
	@Autowired
	private coverageService coverageServiceRef;

	// -------------------------------------get all
	// policy-----------working---------------------------------------------------
//GET http://localhost:1111/view-policy-api
	@GetMapping("/view-policy-api")
	public Collection<Policy> getAllPolicy() {
		Collection<Policy> allPolicy = policyServiceRef.getAllPolicy();
		return allPolicy;
	}
//------------------------------
	
	//GET http://localhost:1111/view-policy-api/{policyId}
		@GetMapping("/view-policy-api/{policyId}")
	    public Policy getPolicyById(@PathVariable("policyId") Integer policyId) {
	        return policyServiceRef.getPolicy(policyId);
	    }
	
//-------------------------get policy by years---------working-------------------------------------------------------------
//GET http://localhost:1111/view-policy-api/years/5years
	@GetMapping("/view-policy-api/years/{years}")
	public List<Policy> getPolicyByYears(@PathVariable String years) {
		List<Policy> foundPolicy = policyServiceRef.findAllPeriod(years);
		// System.out.println("The found movie is: " + foundMovie);
		return foundPolicy;
	}

//------------------------get policy by price--------------------------working--------------------------------------
	// GET http://localhost:1111/view-policy-api/price/5 Lakh
	@GetMapping("/view-policy-api/price/{price}")
	public List<Policy> getPolicyByPrice(@PathVariable("price") String sumInsured) {
		List<Policy> foundPolicy = policyServiceRef.findAllPrice(sumInsured);
		// System.out.println("The found movie is: " + foundMovie);
		return foundPolicy;
	}

//----------------------get policy by type-----------------------needs to be checked-----------------		
//GET http://localhost:1111/view-policy-api/type/family
//GET http://localhost:1111/view-policy-api/type/individual
	@GetMapping("/view-policy-api/type/{type}")
	public List<Policy> getPolicyByType(@PathVariable("type") String type) {
		List<Policy> foundPolicy;
		if (type.equals("Individual") || type.equals("Family")) {
			foundPolicy = policyServiceRef.findAllType(type);

		} else {
			foundPolicy = Collections.emptyList();
		}
		return foundPolicy;
//			List<Policy> foundPolicy = policyServiceRef.findAllType(type);
//			return foundPolicy;
	}

//-----------------------------get policy by price,year,type------------------------------------------------------
	// GET http://localhost:1111/view-policy-api/price/5 Lakh/years/7
	// years/type/individual
	@GetMapping("/view-policy-api/price/{price}/years/{years}/type/{type}")
	public List<Policy> getPolicyByPriceYearsType(@PathVariable("price") String sumInsured,
			@PathVariable("years") String policyPeriod, @PathVariable("type") String type) {
		List<Policy> foundPolicy = policyServiceRef.findByPriceYearsType(sumInsured, policyPeriod, type);
		return foundPolicy;
	}

//_______________________________Pagination(All policies)_____________________________________________________________________________________
	// GET http://localhost:1111/view-policy-api/pagination/0/2
	@RequestMapping(value = "/view-policy-api/pagination/{pageNumber}/{pageSize}", method = RequestMethod.GET)
	public Page<Policy> getAllPolicyByPagination(@PathVariable Integer pageNumber, @PathVariable Integer pageSize) {
		return policyServiceRef.getAllPolicyByPagination(pageNumber, pageSize);
	}

//____________________________Pagination (filter by years)______________________________________________________________________________
// GET http://localhost:1111/view-policy-api/years/{years}/pagination/{pageNumber}/{pageSize}
	@GetMapping("/view-policy-api/years/{years}/pagination/{pageNumber}/{pageSize}")
	public List<Policy> getPolicyByYearsPagination(@PathVariable String years, @PathVariable Integer pageNumber,
			@PathVariable Integer pageSize) {
		return policyServiceRef.findAllPeriodPagination(years, pageNumber, pageSize);
	}

//___________________________Pagination (filter by price)______________________________________________________________________
	// GET
	// http://localhost:1111/view-policy-api/price/{price}/pagination/{pageNumber}/{pageSize}
	@GetMapping("/view-policy-api/price/{price}/pagination/{pageNumber}/{pageSize}")
	public List<Policy> getPolicyByPricePagination(@PathVariable("price") String sumInsured,
			@PathVariable Integer pageNumber, @PathVariable Integer pageSize) {
		return policyServiceRef.findAllPricePagination(sumInsured, pageNumber, pageSize);
	}

//______________________Pagination(filter by type)_______________________________________________________________________________________
	// GET
	// http://localhost:1111/view-policy-api/type/{type}/pagination/{pageNumber}/{pageSize}
	@GetMapping("/view-policy-api/type/{type}/pagination/{pageNumber}/{pageSize}")
	public List<Policy> getPolicyByTypePagination(@PathVariable("type") String type, @PathVariable Integer pageNumber,
			@PathVariable Integer pageSize) {
		return policyServiceRef.findAllTypePagination(type, pageNumber, pageSize);
	}

//___________________Pagination(filter by price,year,type)_________________________________________________________
//GET http://localhost:1111/view-policy-api/price/5 Lakh/years/7 years/type/individual/pagination/{pageNumber}/{pageSize}
	@GetMapping("/view-policy-api/price/{price}/years/{years}/type/{type}/pagination/{pageNumber}/{pageSize}")
	public List<Policy> getPolicyByPriceYearsTypePagination(@PathVariable("price") String sumInsured,
			@PathVariable("years") String policyPeriod, @PathVariable("type") String type,
			@PathVariable Integer pageNumber, @PathVariable Integer pageSize) {
		return policyServiceRef.findByPriceYearsTypePagination(sumInsured, policyPeriod, type, pageNumber, pageSize);
	}

//________________________________________________________reserved for admin______________________________________________________________________________________
//-------------------------------add policy--------Working--------------------------------------------------------------------------------------------------------------
//POST    http://localhost:1111/add-policy-api
	@PostMapping("/add-policy-api")
	public void addNewPolicy(@RequestBody Policy policyRef) {
		System.out.println(policyRef);
		policyServiceRef.addNewPolicy(policyRef);
	}

//--------------------------------------add coverage---------working---------------------------------------------------------------------------------------------------*/
//POST  https://localhost:1111/add-coverage-api	
	@PostMapping("/add-coverage-api")
	public void addNewCoverage(@RequestBody CoverageType coverageTypeRef) {
		coverageServiceRef.addNewCoverage(coverageTypeRef);
	}

//---------------------------------------------delete policy-------working---------------------------------------------------------------------------------------------
//DELETE 	http://localhost:1111/delete-policy-api/1
	@DeleteMapping("/delete-policy-api/{policyId}")
	public void deleteOnePolicy(@PathVariable("policyId") Integer id) {
		policyServiceRef.deleteOnePolicy(id);
	}

//---------------------------------------------delete coverage--------working------------------------------------------------------------------------------------------
//DELETE   https://localhost:1111/delete-coverage-api/1	
	@DeleteMapping("/delete-coverage-api/{coverageId}")
	public void deleteOneCoverage(@PathVariable("coverageId") Integer id) {
		coverageServiceRef.deleteOneCoverage(id);
	}

//---------------------------------------update policy--------------WORKING----------------------------------------------------------------------------------------------
//PUT  https://localhost:1111//update-policy-api/policy/{policyId}
	@PutMapping("/update-policy-api/policy/{policyId}")
	public Policy updateOnePolicy(@RequestBody Policy policyRef, @PathVariable("policyId") Integer id) {
		Policy oldPolicy = policyServiceRef.getPolicy(id);
		return policyServiceRef.updateOnePolicy(policyRef, oldPolicy);
	}

//-----------------------------------------update coverage---------------WORKING----------------------------------------------------------------------------------------
//PUT  https://localhost:1111/update-coverage-api/coverage/{coverageId}
	@PutMapping("/update-coverage-api/coverage/{coverageId}")
	public CoverageType updateOneCoverage(@RequestBody CoverageType coverageTypeRef,
			@PathVariable("coverageId") Integer cid) {
		CoverageType oldCoverage = coverageServiceRef.getCoverage(cid);
		return coverageServiceRef.updateOneCoverage(coverageTypeRef, oldCoverage);
	}

	// ----------------------------------------------------------------------Policy
	// redirect to family & individual with payment api----------------------------

	@Autowired
	private IndividualPolicyRepository policyRepository;

	@Autowired
	private FamilyRepository familyService;

	@PostMapping("/individual-api")
	public ResponseEntity<String> addPolicy(@RequestBody IndividualPolicy policy) {
		try {
			IndividualPolicy savedPolicy = policyRepository.save(policy);
			return new ResponseEntity<>("Policy added with ID: " + savedPolicy.getPolicyHolderId(), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Failed to add policy", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/family-members")
	public ResponseEntity<String> addFamilyMember(@RequestBody FamilyPolicy familyMember) {
		familyService.save(familyMember);
		return new ResponseEntity<>("Family member added successfully", HttpStatus.CREATED);
	}

	@GetMapping("/family-members")
	public List<FamilyPolicy> getAllFamilyMembers() {
		return familyService.findAll();
	}

	@DeleteMapping("/delete-members/{id}")
	public ResponseEntity<Void> deleteFamilyMember(@PathVariable Long id) {
		try {
			familyService.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

}
