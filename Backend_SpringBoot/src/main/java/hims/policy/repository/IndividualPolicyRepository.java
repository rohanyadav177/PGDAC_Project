package hims.policy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hims.policy.model.IndividualPolicy;

public interface IndividualPolicyRepository extends JpaRepository<IndividualPolicy, Long> {

}