import axios from "axios";

const getIssues = (page:number)=>{
    let url = `https://api.github.com/repos/facebook/react/issues?page=${page}`
    return axios.get(url)
}

export const issuesServices = {
    getIssues   
}