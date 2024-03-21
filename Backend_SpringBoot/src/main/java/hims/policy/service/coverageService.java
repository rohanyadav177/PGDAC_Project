package hims.policy.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hims.policy.model.CoverageType;
import hims.policy.policyException.policyException;
import hims.policy.repository.Coverage_TypeRepository;


@Service // Marks this class as a Service
public class coverageService {
	@Autowired
	private Coverage_TypeRepository coverageRepositoryRef;
//________________________________________only for admin_________________________________________________________
	// --------------add new coverage---------------------

	public void addNewCoverage(CoverageType coverageTypeRef)
	{
		coverageRepositoryRef.save(coverageTypeRef);
	}
//-----------------delete old coverage-----------------------

	public void deleteOneCoverage(Integer id)
	{
		coverageRepositoryRef.deleteById(id);
	}
//------------------update old coverage----------------------
	public CoverageType updateOneCoverage(CoverageType coverageTypeRef,CoverageType  oldcoveragetype)
	{
		    oldcoveragetype.setAdults(coverageTypeRef.getAdults());
			oldcoveragetype.setChildren(coverageTypeRef.getChildren());
			oldcoveragetype.setType(coverageTypeRef.getType());
			return coverageRepositoryRef.save(oldcoveragetype);
	}
		 
	public CoverageType getCoverage(Integer cid) {
		return coverageRepositoryRef.findById(cid).orElseThrow(()-> new policyException("Invalid id"));
	}

}

