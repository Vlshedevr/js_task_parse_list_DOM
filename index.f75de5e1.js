"use strict";
const emploerList = document.querySelectorAll("li");
function parsSalary(strSalary) {
    return Number(strSalary.replace(/[$,]/g, ""));
}
function sortList(list) {
    return [
        ...list
    ].sort((a, b)=>{
        const aSalary = parsSalary(a.getAttribute("data-salary"));
        const bSalary = parsSalary(b.getAttribute("data-salary"));
        return bSalary - aSalary;
    });
}
function getEmployees(list) {
    const informationPeople = [];
    [
        ...list
    ].forEach((emploer)=>{
        const emploerInfo = {
            name: emploer.textContent.trim(),
            position: emploer.getAttribute("data-position"),
            salary: emploer.getAttribute("data-salary"),
            age: Number(emploer.getAttribute("data-age"))
        };
        informationPeople.push(emploerInfo);
    });
    return informationPeople;
}
const emploerRaring = sortList(emploerList);
getEmployees(emploerRaring);
const allList = emploerList[0].parentElement;
emploerRaring.forEach((employer)=>allList.append(employer));

//# sourceMappingURL=index.f75de5e1.js.map
