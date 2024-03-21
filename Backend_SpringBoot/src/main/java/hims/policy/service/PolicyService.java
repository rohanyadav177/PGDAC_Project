package hims.policy.service;



import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import hims.policy.model.Policy;
import hims.policy.policyException.policyException;
import hims.policy.repository.PolicyRepository;



@Service //Marks this class as a Service
public class PolicyService {
	@Autowired
	private PolicyRepository policyRepositoryRef;
//---------------------show all the policy --------------------------------------------------------------------------------------------------------------------------------

	public Collection<Policy> getAllPolicy(){
		Collection<Policy> allPolicy = 
				policyRepositoryRef.findAll();
		return allPolicy;
	}
	
	public Policy getPolicyById(Integer policyId) {
        Optional<Policy> policyOptional = policyRepositoryRef.findById(policyId);
        return policyOptional.orElse(null); // Return null if policy is not found
    }
//-------------------filter policy by policy period--------------------
	public List<Policy> findAllPeriod(String policyPeriod)
	{
		List<Policy> allPolicy=policyRepositoryRef.findAllPeriod(policyPeriod);
		return allPolicy;
	} 
//-------------------------filter policy by price------------------------------------------------------------------------------------------------------------------------------
	public List<Policy> findAllPrice(String sumInsured){
		List<Policy> allPolicy = policyRepositoryRef.findAllPrice(sumInsured);
		return allPolicy;
	}
//-------------------------filter policy by type----------------------------------------------------------------------------------------------------------------------------
	
	public List<Policy> findAllType(String type){
		List<Policy> allPolicy =policyRepositoryRef.findAllType(type);
		return allPolicy;
	}
	//--------------------filter policy by sum,years,type-----------------------------------------------------------------------------------------------------------------------------------------
	public List<Policy> findByPriceYearsType(String sumInsured,String policyPeriod,String type)
	{
		List<Policy> allPolicy =policyRepositoryRef.findAllType(type);
		return allPolicy;	
	}
	//------------------------------Pagination-------------------------------------------------------------------------------------------------------------------------------
	public Page<Policy> getAllPolicyByPagination(Integer pageNumber, Integer pageSize) {
		Pageable pageable=PageRequest.of(pageNumber,pageSize);
		return policyRepositoryRef.findAll(pageable);
	}
//---------------------------------Pagination by years----------------------------------------------------------------------------
	public List<Policy> findAllPeriodPagination(String years, Integer pageNumber, Integer pageSize) {
		Pageable pageable=PageRequest.of(pageNumber,pageSize);
		return policyRepositoryRef.findAllPeriodPagination(years,pageNumber,pageSize,pageable);
	}
//------------------Pagination by price--------------------------------------------------------------------------------------------
public List<Policy> findAllPricePagination(String sumInsured, Integer pageNumber, Integer pageSize) {
	Pageable pageable=PageRequest.of(pageNumber,pageSize);
	return policyRepositoryRef.findAllPricePagination(sumInsured,pageNumber,pageSize,pageable);
	}
//--------------------Pagination by type------------------------------------------------------------------------------------------
public List<Policy> findAllTypePagination(String type, Integer pageNumber, Integer pageSize) {
	Pageable pageable=PageRequest.of(pageNumber,pageSize);
	return policyRepositoryRef.findAllTypePagination(type,pageNumber,pageSize,pageable);
}
//--------------------Pagination by price, year and type-------------------------------------------------------------------------
public List<Policy> findByPriceYearsTypePagination(String sumInsured, String policyPeriod, String type,
		Integer pageNumber, Integer pageSize) {
	Pageable pageable=PageRequest.of(pageNumber,pageSize);
	return policyRepositoryRef.findAllPriceYearTypePagination(type,pageNumber,pageSize,pageable);
}
	
	//-------------------------------------only for admin--------------------
	public void addNewPolicy(Policy policyRef) {
		policyRepositoryRef.save(policyRef);
	}
	
	public void deleteOnePolicy(Integer id) {
		policyRepositoryRef.deleteById(id);
	}	
	
	public Policy getPolicy(int id) {
		return policyRepositoryRef.findById(id).orElseThrow(()-> new policyException("Invalid id"));
				}
		

	 public Policy updateOnePolicy(Policy policyRef,Policy oldPolicy) {
			oldPolicy.setPolicyNo(policyRef.getPolicyNo());
			oldPolicy.setPolicyPeriod(policyRef.getPolicyPeriod());
			oldPolicy.setSumInsured(policyRef.getSumInsured());
			oldPolicy.setPremium(policyRef.getPremium());
			oldPolicy.setKeyFeatures(policyRef.getKeyFeatures());
			oldPolicy.setDescription(policyRef.getDescription());
			return policyRepositoryRef.save(oldPolicy);
	 }
	
	
}







