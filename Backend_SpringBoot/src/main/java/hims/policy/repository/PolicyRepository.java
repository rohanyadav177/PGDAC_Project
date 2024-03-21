package hims.policy.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hims.policy.model.Policy;

//@Repository is not required because JpaRepository is already a Managed Component
public interface PolicyRepository extends JpaRepository<Policy, Integer> {
	@Query(value = "Select * from policy_info where policy_period = ?1", nativeQuery = true)
	public List<Policy> findAllPeriod(String policyPeriod);

	@Query(value = "Select * from policy_info where sum_insured= ?1", nativeQuery = true)
	public List<Policy> findAllPrice(String sumInsured);

	@Query(value = "select p.*,c.adults,c.children,c.type from policy_info p inner join coverage_type c on p.coverage_id = c.coverage_id where c.type = ?1", nativeQuery = true)
	public List<Policy> findAllType(String type);

	@Query(value = "SELECT  pi.policy_number, pi.policy_name, pi.premium, pi.years, pi.price,ct.adults,ct.children,ct.type from  policy_info pi inner join coverage_type ct on pi.coverage_id = ct.coverage_id where pi.price = ?1 || pi.years =?2  || ct.type = ?3", nativeQuery = true)
	public List<Policy> findByPriceYearsType(String sumInsured, String policyPeriod, String type);

//----------------------------------Pagination----------------------------------------------------------------------------------
	@Query(value = "Select * from policy_info where policy_period = ?1", nativeQuery = true)
	public List<Policy> findAllPeriodPagination(String years, Integer pageNumber, Integer pageSize, Pageable pageable);

	@Query(value = "Select * from policy_info where sum_insured= ?1", nativeQuery = true)
	public List<Policy> findAllPricePagination(String sumInsured, Integer pageNumber, Integer pageSize,
			Pageable pageable);

	@Query(value = "select p.*,c.adults,c.children,c.type from policy_info p inner join coverage_type c on p.coverage_id = c.coverage_id where c.type = ?1", nativeQuery = true)
	public List<Policy> findAllTypePagination(String type, Integer pageNumber, Integer pageSize, Pageable pageable);

	@Query(value = "SELECT  pi.policy_number, pi.policy_name, pi.premium, pi.years, pi.price,ct.adults,ct.children,ct.type from  policy_info pi inner join coverage_type ct on pi.coverage_id = ct.coverage_id where pi.price = ?1 || pi.years =?2  || ct.type = ?3", nativeQuery = true)
	public List<Policy> findAllPriceYearTypePagination(String type, Integer pageNumber, Integer pageSize,
			Pageable pageable);
}
