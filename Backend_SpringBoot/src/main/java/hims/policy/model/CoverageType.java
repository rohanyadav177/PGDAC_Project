package hims.policy.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Coverage_Type")
public class CoverageType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Coverage_Id")
	private Integer coverageId;
	@Column(name = "Adults")
	private int adults;
	@Column(name = "Children")
	private int children;
	@Column(name = "Type")
	private String type;

//-----------------------------------------------
	public CoverageType() {
		// TODO Auto-generated constructor stub
	}

	public CoverageType(Integer coverageId, int adults, int children, String type) {
		super();
		this.coverageId = coverageId;
		this.adults = adults;
		this.children = children;
		this.type = type;
	}

//---------------------------------------------
	public Integer getCoverageId() {
		return coverageId;
	}

	public void setCoverageId(Integer coverageId) {
		this.coverageId = coverageId;
	}

	public int getAdults() {
		return adults;
	}

	public void setAdults(int adults) {
		this.adults = adults;
	}

	public int getChildren() {
		return children;
	}

	public void setChildren(int children) {
		this.children = children;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

//---------------------------------------------------
	@Override
	public String toString() {
		return "CoverageType [coverageId=" + coverageId + ", adults=" + adults + ", children=" + children + ", type="
				+ type + "]";
	}



}
