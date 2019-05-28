export default (...router)=>{
    // window.location.href=`${window.location.protocol}//${window.location.host}/#/search/${keywords}`
    let localUrl= `${window.location.protocol}//${window.location.host}/#/`
    router = router.join('/')
    window.location.href=localUrl + router;
}