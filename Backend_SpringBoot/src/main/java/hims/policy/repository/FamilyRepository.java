package hims.policy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hims.policy.model.FamilyPolicy;

public interface FamilyRepository extends JpaRepository<FamilyPolicy, Long> {

}