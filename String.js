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

let str= "the sky is blue"
 // Output: "blue is sky the"
function solve(str){
    s =  str.split(' ')

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



//     Longest Substring Without Repeating Characters

let s = "abcabcbb"

function solve(s){
    let maxLen=-Infinity
    let start=0,end=0
    let map=new Map()
    while(end<s.length){
        if(map.get(s[end])){
            map.delete(s[start])
            start++
        }else{
            map.set(s[end],1)
            maxLen=Math.max(maxLen,end-start+1)
            end++
        }
    }
    
    return maxLen
}
console.log(solve(s))


let nums1 = [1,3], nums2 = [2]
function solve(nums2,nums1){
    let arr=nums1.concat(nums2).sort((a,b)=>a-b)
    let a=arr.length
    if(a%2!=0){
     let mid=Math.floor(a/2)
     return arr[mid]
    }else{
      let mid=a/2
      let k=(arr[m]+arr[m-1])/2
      return k
    }
  }
  console.log(solve(nums2,nums1))

  //                3sum

  let nums= [-1,0,1,2,-1,-4]

  function solve(nums){
    nums.sort((a,b)=>a-b)
      let res=[]
    for(let i=0;i<nums.length;i++){
      if(i>0 && nums[i]==nums[i-1])
      continue
      let start=i+1,end=nums.length-1
    
      while(start<end){
        const sum=nums[i]+nums[start]+nums[end]
        if(sum>0){
          end--
        }else if(sum<0){
          start++
        }else{
          res.push([nums[i],nums[start],nums[end]])
          start++
          end--
          while(end>0 && nums[end]==nums[end+1])
          end--
        }
      }
    }
    return res
  }
  console.log(solve(nums))
