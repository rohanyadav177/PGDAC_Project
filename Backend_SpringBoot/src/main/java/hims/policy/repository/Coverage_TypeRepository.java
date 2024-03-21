package hims.policy.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import hims.policy.model.CoverageType;


//import Policy_api.entity.Policy;
//@Repository is not required because JpaRepository is already a Managed Component
public interface Coverage_TypeRepository extends JpaRepository<CoverageType, Integer>{
}
