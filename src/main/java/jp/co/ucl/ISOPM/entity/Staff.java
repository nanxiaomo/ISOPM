package jp.co.ucl.ISOPM.entity;

/**
 * Staff Entity
 * Created by ZhenYang on 2017/02/19.
 */
public class Staff extends BaseEntity {

    private Integer pKey;

    private String staffName;

    private String corpName;

    private Integer workingNo;

    public Integer getPKey() {
        return pKey;
    }

    public void setPKey(Integer pKey) {
        this.pKey = pKey;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public String getCorpName() {
        return corpName;
    }

    public void setCorpName(String corpName) {
        this.corpName = corpName;
    }

    public Integer getWorkingNo() {
        return workingNo;
    }

    public void setWorkingNo(Integer workingNo) {
        this.workingNo = workingNo;
    }
}
