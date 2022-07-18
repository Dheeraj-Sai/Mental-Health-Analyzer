

Mental health is very important at every stage of our lives, from childhood and adolescence through adulthood. mental state includes our emotional, psychological, and social well-being. It affects how we expect, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. mental state is very important at every stage of life, from childhood and adolescence through adulthood.

Although the terms are often used interchangeably, poor psychological state and psychological illness don't seem to be the identical. someone can experience poor psychological state and not be diagnosed with a mental state. Likewise, an individual diagnosed with a psychopathy can experience periods of physical, mental, and social well-being.

There is no single cause for psychological state. variety of things can contribute to risk for psychological state, such as: early adverse life experiences, like trauma or a history of abuse (for example, abuse, statutory offence, witnessing violence, etc.), experiences
related to other ongoing (chronic) medical conditions, like cancer or diabetes, biological factors or chemical imbalances within the brain, use of alcohol or drugs, having feelings of loneliness or isolation, experiencing fear within the context of the COVID-19 pandemic and anxiety, stress, fear of failure/unemployment etc.

Our website aims at providing the users with a platform that may help them to be told the way to address these issues in a very healthy way.


Tech Stack used:

FRONT-END:

HTML
CSS
Bootstrap
JavaScript
Visual code studio


Technologies used at server side:

Node js
Express js


Packages used/libraries used from npm package manger:

Http
Path
Socket.io





Here are some of the snapshots of the website and the score calculations.
![image](https://user-images.githubusercontent.com/66869358/173076183-074e39e8-1029-4371-acac-9f47c9e1c0e2.png)
![image](https://user-images.githubusercontent.com/66869358/173076231-b201181f-c572-4731-a6d3-a9161ce2fd73.png)
![image](https://user-images.githubusercontent.com/66869358/173076293-9dfc35e3-07c4-414f-b0d8-b1cfa04e0f68.png)
![image](https://user-images.githubusercontent.com/66869358/173076322-fc818fe2-4c44-4c31-9ef0-d08c471da985.png)
![image](https://user-images.githubusercontent.com/66869358/173076402-d23e6261-d523-45c0-b910-c2e8d20996ce.png)
![image](https://user-images.githubusercontent.com/66869358/173076496-ba6f75f8-cfc6-47ae-93ee-38a818bd5fd9.png)
![image](https://user-images.githubusercontent.com/66869358/173076526-4a49caa4-2899-4a8c-9115-6f555bc205c7.png)
![image](https://user-images.githubusercontent.com/66869358/173076592-9ec77605-818c-4abc-b3fa-1bfb73b5a0f0.png)
![image](https://user-images.githubusercontent.com/66869358/173076613-061062bb-595b-4cc0-952a-c86b7a832d0b.png)


Calculations:

(max positive score * number of tokens) / number of tokens
Once the user leave the chat we call on the sentiment analysis function from the module and calculate the score by adding the valence of each key word which is present in the AFFIN dataset that is in their messages ,a comparitive score is also calculated .

Then the score is checked if it is greater than 8 the user is sent to the page with resources for content users ,if it is less than 8 and greater than 6 they are sent to the page with resources for moderatley distressed users and if the score is less than 6 they are sent to the page with resources for extremely distressed users


DATASET

The sentiment analysis uses AFINN-165 wordlist and Emoji Sentiment Ranking AFINN -is a list of words rated for the sentiment analysed from it with an integer between minus five (negative) and plus five (positive). Emoji Sentiment Ranking -Is a list of the sentiments of the emojis is computed from the sentiment of the tweets in which they occur.
