let flexibleValue: any =10;
flexibleValue ="Now I am a string";
flexibleValue =true;
 let mysteryValue:unknown ="Hello pranitha";
 if(typeof mysteryValue ==="string"){
    console.log("Length of unknown string:"+ mysteryValue.length);
 }
 function logNotification(message: string): void {
    console.log("AlERT:"+ message);
 }
 logNotification("Environment Setup Complete!");