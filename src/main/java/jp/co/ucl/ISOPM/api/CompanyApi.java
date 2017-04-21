package jp.co.ucl.ISOPM.api;

import jp.co.ucl.ISOPM.entity.Company;
import jp.co.ucl.ISOPM.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/company")
@RestController
public class CompanyApi {
    @Autowired
    CompanyService companyService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Company> listCompanys() {
        return companyService.ListPortion();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Company getCompanyById(@PathVariable int id) {
        return companyService.getCompanyById(id);
    }
}
