import Sequelize from "sequelize"

 export const sequelize = new Sequelize(
     "projects",
     "root",
     "",
{
    host: "localhost",
    dialect:"mysql",
     
}
);