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
        // console.log('time now', h+':'+min);
        return h+':'+min;
    }

    start() {
        let me = this;
        function checkClock(alarm) {
            
                if (alarm.time === me.getCurrentFormattedTime())
                    alarm.callback();
               
        }

        if (me.timerId === null){
            me.timerId = setInterval( (Array) => 
            Array.forEach(alarm => { 
                checkClock(alarm)}), 60000, me.alarmCollection);
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        console.log('активныe будильники :');
        this.alarmCollection.forEach( alarm => {
            console.log(alarm.id + '-й будильник зазвонит в ' + alarm.time);
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
    alarm.addClock("16:28", () => console.log("подъём!"),1 );
    
    alarm.addClock("16:29", () => console.log("подъём!!!"),2 );
    alarm.addClock("16:30", () => console.log("кто спит - того убьём!"),3 );
    alarm.printAlarms();
    alarm.start();

    function enough(){
        alarm.stop();
        alarm.clearAlarms();
        alarm.printAlarms();
    } 

    
    setTimeout(enough, 200000);
}

