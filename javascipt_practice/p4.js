function Emp(n,s){
    this.n=n;
    this.s=s;
    this.getDetails = ()=>{ return `${this.n},${this.s}`};
}
function Mgr(n,s,d){
    Emp.call(this,n,s)
    this.d=d;
}
var mgr = new Mgr('Alice',4000,'Engineer')
console.log(mgr.getDetails());
console.log(mgr.d);