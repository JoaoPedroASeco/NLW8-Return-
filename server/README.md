npm init -y
npm i typescript @types/node ts-node-dev -D
npx tsc --init
npx prisma migrate dev
npx prisma studio 

--> "target": "es2020"

#SOLID: 
-   S ingle Responsibility;
-   O pen/Closed Principle;
-   L iskov Substitution Principle;
-   I nterface Segregation   Principle;
-   D ependency Inversion Principle;

---------

S. Cada classe/função tem uma responsabilidade única;
O. As classes da nossa aplicação devem ser abertas para extensão mas fechadas para modificação;
L. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
I. ...
D. as classes/funçoes dever inverter a relação entre as dependecias