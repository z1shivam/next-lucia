# I am finally giving up on Next-Auth
I tried so many times just to use this library and get the auth working on projects. But it's just too much of a hassle to get it working. I am going to try something else. 

With this project, I tried a library I never heard of, Lucia Auth. And I will say, oh god, I get it to work in just half an hour. It is so much easy and staright forward. 

## Reason why LuciaAuth is better
**Level of abstraction it provides** NextAuth tries to simplify the auth process by giving so much abstraction that it is hard to understand the flow of the authentication beneath it. It might be easy for someone who is already familiar with the library, but for someone who is new to it, it is a nightmare. LuciaAuth, on the other hand, provides a very simple API to work with.

It let me impliment my own workflow and takes up the hard things on it own, basically, session management. Since I myself wrote the code for authentication, I can easily control the flow and the auth myself. 

## I am not saying NextAuth is bad
AuthJS (Next-Auth) is a great library and its stars on github and people using it are the proof of it. But in my opinion, it does not provide much of flexibility to the owner of the application. 

It is great for someone who want to impliment auth very easy and has a very straight forward process for this. I think it's biggest drawback is its documentation. It's just very messy and hard to read and follow. Guide do not provide much of information about the setup and all and if you go to API reference, then there is so big documents that you can not find the thing you are looking for. 

AuthJS is not for someone who like to experiment with his data flow and managing the data. I tried it with prisma and postgres, and it was a breeze but when i try it with mongo, then it was kinda hard. It was throwing such random error that i was not being able to understand what is wrong.

## Conclusion
Simply saying, LuciaJS is the Tailwind of authentication and AuthJS is kinda like BootStrap!
And I prefer Tailwind.