//  Longest Common Prefix


let s = ["flower","flow","flight"]

function solve(s){
    s.sort()
    let res=''
    for(let i=0;i<s[0].length;i++){
        if(s[0][i]!=s[s.length-1][i]){
            break
        }else{
            res+=s[0][i]
        }
    }
    console.log(res)
    return res
}
console.log(solve(s))


//          Reverse Words in a String

let s = "the sky is blue"
 Output: "blue is sky the"
function solve(s){
    s =  s.split(' ')

    let res = []
    for(let i = 0 ; i < s.length ; i++){
         if(s[i] == '') continue
          res.push(s[i])   
    }
    
    let i = 0
    let j = res.length - 1
    while(i < j){      
        let temp = res[i]
        res[i] = res[j]
        res[j] = temp
        i++;
        j--;
    }
    // return res.join(' ')

}
console.log(solve(s))

//      Find the Index of the First Occurrence in a String

let haystack = "sadbutsad", needle = "sad"

function solve(haystack,needle){
    if (!needle.length) return 0

    for(let i=0;i<haystack.length;i++)
        if(haystack.substr(i,needle.length)===needle){
            return i
        
    }
    return -1
}
console.log(solve(haystack,needle))