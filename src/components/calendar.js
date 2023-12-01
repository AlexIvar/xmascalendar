import React from 'react'
import Button from '@mui/material/Button';
import CalendarItem from './calendarItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import moment from"moment";

console.log(moment().date())
console.log( moment().date() + 1)

let items = [
    {
       "id": 1,
       "text": "Happy holidays baltasito",
       "color": moment().date() >= 1 ?  "#2979ff" : "#1c54b2",
       "title": "Enchanted to meet you",
       "body": " Today marks the first of December, signifying a full month since we started talking. Each passing day with you has been a treasure, filling my heart with joy and gratitude.",
       "body2": " You've become an irreplaceable part of my world, making each moment brighter and more beautiful. I feel incredibly lucky to have crossed paths with someone as amazing as you. Your laughter, your kindness, and your presence bring an indescribable warmth to my life. ",
       "body3": "I cherish every conversation, every shared smile, and every memory we've created together in this short time. As we celebrate this small milestone, know that my affection for you grows with each passing day. Your presence in my life is a gift I cherish, and I'm eagerly looking forward to the days ahead filled with more laughter, adventures, and shared moments. I love you so so much my sweet Baltasita.",
       "body4": "Thank you for being the wonderful person you are."
    },
    {
        "id": 2,
        "text": "I love youu",
        "color": moment().date() >= 2 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 3,
        "text": "We are family",
        "color": moment().date() >= 3 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 4,
        "text": "I am so glad to have met you",
        "color": moment().date() >= 4 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 5,
        "text": "Happy holidays",
        "color": moment().date() >= 5 ?  "#2979ff" : "#1c54b2",
    },
    {
         "id": 6,
         "text": "Happy holidays",
         "color": moment().date() >= 6 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 7,
        "text": "Happy holidays",
        "color": moment().date() >= 7 ?  "#2979ff" : "#1c54b2",
    },
    {
         "id": 8,
         "text": "Happy holidays",
         "color": moment().date() >= 8 ?  "#2979ff" : "#1c54b2",
    },
        {
        "id": 9,
        "text": "Happy holidays",
        "color": moment().date() >= 9 ?  "#2979ff" : "#1c54b2",
    },
    {
         "id": 10,
         "text": "Happy holidays",
         "color": moment().date() >= 10 ?  "#2979ff" : "#1c54b2",
    },
    ,
        {
        "id": 11,
        "text": "Happy holidays",
        "color": moment().date() >= 11 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 12,
        "text": "Happy holidays",
        "color": moment().date() >= 12 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 13,
        "text": "Happy holidays",
        "color": moment().date() >= 13 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 14,
        "text": "Happy holidays",
        "color": moment().date() >= 14 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 15,
        "text": "Happy holidays",
        "color": moment().date() >= 15 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 16,
        "text": "Happy holidays",
        "color": moment().date() >= 16 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 17,
        "text": "Happy holidays",
        "color": moment().date() >= 17 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 18,
        "text": "Happy holidays",
        "color": moment().date() >= 18 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 19,
        "text": "Happy holidays",
        "color": moment().date() >= 19 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 20,
        "text": "Happy holidays",
        "color": moment().date() >= 20 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 21,
        "text": "Happy holidays",
        "color": moment().date() >= 21 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 22,
        "text": "Happy holidays",
        "color": moment().date() >= 22 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 23,
        "text": "Happy holidays",
        "color": moment().date() >= 23 ?  "#2979ff" : "#1c54b2",
    },
    {
        "id": 24,
        "text": "Happy holidays",
        "color": moment().date() >= 24 ?  "#2979ff" : "#1c54b2",
    },
  ]

export const Calendar = () => {
    return (
        <div>
            <Typography gutterBottom variant="h4" component="div" sx={{fontWeight:"bold", paddingTop:"20px", color: "#424242"}}>
            Mafesita's Christmas Countdown
            </Typography>
           
            <Grid container spacing={{ xs: 2, sm: 4, md: 5, lg: 5, xl: 3 }} columns={{ xs: 6, sm: 8, md: 10, lg: 10, xl: 4 }}  sx={{padding: 5}}>
                {items.map((item) => {
                    return (
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={4} key={item.id}>
                            <CalendarItem numberid={item.id} cardText={item.text} cardColor={item.color} cardTitle={item.title} cardBody={item.body} cardBody2={item.body2} cardBody3={item.body3} cardBody4={item.body4}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default Calendar;