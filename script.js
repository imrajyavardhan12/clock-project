const dateElement = document.getElementById('date-element')
const timeElement = document.getElementById('time-element')
const dayElement = document.getElementById('day-element')

if(!Date.prototype.getDayName){
    Date.prototype.getDayName = function(){
        const day = this.getDay()
        switch(day){
            case 0 : return 'Sunday'

            case 1 : return 'Monday'

            case 2 : return 'Tuesday'

            case 3 : return 'Wednesday'
   
            case 4 : return 'Thursday'
 
            case 5 : return 'Friday'

            case 6 : return 'Saturday'

            default : return 'Invalid day'
        }
    }
}



function updateTime(){
    const now = new Date();
    const hours = now.getHours() % 12 || 12
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const date  = now.getDate().toString().padStart(2,'0')
    const month = (now.getMonth()+1).toString().padStart(2,'0')
    const year = now.getFullYear()
    const day = now.getDayName()

    timeElement.innerText = `${hours.toString().padStart(2,'0')}:${minutes}:${seconds} ${ampm}`

    dateElement.innerText = `${date}/${month}/${year}`
    dayElement.innerText = `${day}`

}

updateTime()    
setInterval(updateTime,1000);



