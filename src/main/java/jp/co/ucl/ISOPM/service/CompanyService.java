package jp.co.ucl.ISOPM.service;

import jp.co.ucl.ISOPM.dao.CompanyDao;
import jp.co.ucl.ISOPM.entity.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    CompanyDao companyDao;

    /**
     * list all company
     * @return
     */
    public List<Company> listAll() {
        return companyDao.listAll();
    }
    
    public List<Company> ListPortion() {
    	return companyDao.ListPortion();
    }
    public Company getCompanyById(int id) {
        return companyDao.getCompanyById(id);
    }
}
