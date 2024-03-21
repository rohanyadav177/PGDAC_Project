package hims.policy.model;

//import org.antlr.v4.runtime.misc.NotNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Policy_info")
public class Policy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Policy_id")
	private Integer policyId;
	@Column(name = "Policy_no")
	private int policyNo;
	@Column(name = "Policy_Period")
	private String policyPeriod;
	@Column(name = "Policy_name")
	private String policyName;
	@Column(name = "Sum_Insured")
	private String sumInsured;
	@Column(name = "Premium")
	private int premium;
	@ManyToOne // Many policies can have one coverage type
	@JoinColumn(name = "Coverage_Id") // Foreign key column in Policy table
	public CoverageType coverageType;
	@Column(name = "Key_Features")
	private String keyFeatures;
	@Column(name = "Description")
	private String description;

	public Policy() {
		// TODO Auto-generated constructor stub
	}

	public Policy(Integer policyId, int policyNo, String policyPeriod, String policyName, String sumInsured,
			int premium, CoverageType coverageType, String keyFeatures, String description) {
		super();
		this.policyId = policyId;
		this.policyNo = policyNo;
		this.policyPeriod = policyPeriod;
		this.policyName = policyName;
		this.sumInsured = sumInsured;
		this.premium = premium;
		this.coverageType = coverageType;
		this.keyFeatures = keyFeatures;
		this.description = description;
	}

	public Integer getPolicyId() {
		return policyId;
	}

	public void setPolicyId(Integer policyId) {
		this.policyId = policyId;
	}

	public int getPolicyNo() {
		return policyNo;
	}

	public void setPolicyNo(int policyNo) {
		this.policyNo = policyNo;
	}

	public String getPolicyPeriod() {
		return policyPeriod;
	}

	public void setPolicyPeriod(String policyPeriod) {
		this.policyPeriod = policyPeriod;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public String getSumInsured() {
		return sumInsured;
	}

	public void setSumInsured(String sumInsured) {
		this.sumInsured = sumInsured;
	}

	public int getPremium() {
		return premium;
	}

	public void setPremium(int premium) {
		this.premium = premium;
	}

	public CoverageType getCoverageType() {
		return coverageType;
	}

	public void setCoverageType(CoverageType coverageType) {
		this.coverageType = coverageType;
	}

	public String getKeyFeatures() {
		return keyFeatures;
	}

	public void setKeyFeatures(String keyFeatures) {
		this.keyFeatures = keyFeatures;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Policy [policyId=" + policyId + ", policyNo=" + policyNo + ", policyPeriod=" + policyPeriod
				+ ", policyName=" + policyName + ", sumInsured=" + sumInsured + ", premium=" + premium
				+ ", coverageType=" + coverageType + ", keyFeatures=" + keyFeatures + ", description=" + description
				+ "]";
	}

}
