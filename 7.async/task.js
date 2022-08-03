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
        return h+':'+min;
    }

    start() {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime())
                alarm.callback();
        }


    }

    stop() {

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


// test
function testcase() {
    let alarm = new AlarmClock();
    alarm.addClock("06:05", () => console.log("подъём!"),1 );
    
    alarm.addClock("06:07", () => console.log("подъём!!!"),2 );
    alarm.addClock("06:10", () => console.log("кто спит - того убьём!"),3 );
    alarm.printAlarms();
}

