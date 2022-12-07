const users = [
    {userId: 1, name: 'Clinton',attribute:['nice','cute']},
    {userId: 2, name: 'Mike',attribute:['lovey']},
    {userId: 3, name: 'Kico',attribute:['nice','cool']},
]

const rta =  users.map(user => user.attribute).flat();

console.log(rta);

//-------ma 
const rta2 = users.flatMap(user => user.attribute);

console.log(rta2);



// challenge

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


// const rta10 = Object.values(calendars).flatMap(calendar => calendar.map(item => item.startDate));

// console.log(rta10);

const test = Object.values(calendars).flatMap(calendar => calendar.map(item => item.startDate));
// const test = Object.values(calendars).flat().map(calendar => calendar.startDate);


console.log(test);