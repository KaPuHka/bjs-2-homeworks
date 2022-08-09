class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, timerId) {
        if (typeof(timerId) === 'undefined')
            throw new Error("error text");

        if (this.alarmCollection.map(alarm => alarm.id).includes(timerId)) {
            console.error("TimerId уже существует!");
            // 
        } else
            this.alarmCollection.push({ id: timerId, time: time, callback: callback});

    }

    removeClock(timerId){
        let backupCollection = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter(alarm => { return alarm.id !== timerId });
        return backupCollection.length !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        let h = currentDate.getHours() < 10 ? '0'+currentDate.getHours() : currentDate.getHours();
        let min = currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes() : currentDate.getMinutes();
        console.log('time now', h+':'+min);
        return h+':'+min;
    }

    start() {
        let me = this;
        function checkClock(alarm) {
            if (alarm.time === me.getCurrentFormattedTime())
                alarm.callback();
        }
        return new Promise(function (resolve, reject) {
            
            me.alarmCollection.forEach(alarm => {
                if (me.timerId === null){
                    resolve(setInterval( checkClock, 60000, alarm));
                };   
            });   
        });
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach( alarm => {
            console.log(alarm.id + ' зазвонит в ' + alarm.time);
        });
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// https://ru.stackoverflow.com/questions/554290/
// https://github.com/KaPuHka/bjs-2-homeworks/tree/main/7.async

// test
function testcase() {
    let alarm = new AlarmClock();
    alarm.addClock("06:40", () => console.log("подъём!"),1 );
    
    alarm.addClock("06:44", () => console.log("подъём!!!"),2 );
    alarm.addClock("06:45", () => console.log("кто спит - того убьём!"),3 );
    alarm.printAlarms();
    alarm.start();

  //  alarm.stop();
  //  alarm.clearAlarms();
   // alarm.printAlarms();
}

