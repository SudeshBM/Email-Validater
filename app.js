console.log("This is my script")

let result = {
        "tag": "",
        "free": false,
        "role": false,
        "user": "aurthor",
        "email": "aurthor@xspark.com",
        "score": 0.64,
        "state": "undeliverable",
        "domain": "xspark.com",
        "reason": "invalid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": false,
        "did_you_mean": "",
        "format_valid": true
      
}


/*Submit btn functionality*/
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`
    let key = "ema_live_zGxOdhlQ8o6NBvqKXpfs1Lc8OMbaqYKeHLHFvAwg" /*Connection to my email validator API*/
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

     /*To get results on screen */
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})

