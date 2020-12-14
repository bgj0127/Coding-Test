// 프로그래머스 2단계 

function solution(priorities, location) {
    var answer = 0;
    var temp;

    var tempArr = [];
    var str = String(priorities[location])
    priorities[location] = str;
    for(let i = 0; i<priorities.length; i++){
        var cnt = 0;
        temp = priorities[0];
        console.log("temp : "+temp);
        for(let j = 0; j<priorities.length; j++){
            if(temp < priorities[j]){
                priorities.shift();
                priorities.push(temp);
                i = 0;
                break;
            }
            cnt++;
        }
        if(cnt == priorities.length){
            priorities.shift();
            tempArr.push(temp);
            cnt = 0;
            i = 0;
        }
      console.log("tempArr : "+tempArr);
    }
    tempArr.push(priorities[0]);
    for(let i = 0; i<tempArr.length; i++){
        if((typeof tempArr[i]) == 'string'){
            answer = i+1;
        }
    }
  return answer;
}
console.log(solution([2,2,2,1,3,4],3))
