#include<iostream>
using namespace std;
int print(int n){
    
  if(n==0){
      return;

  }
  return n*print(n-1)
}
int main(){
    print(5);
    return 0;
}