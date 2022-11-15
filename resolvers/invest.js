const query = require('../DB/database');

//GetAllInvest
async function getAllInvest(args){
    const sql = `
    SELECT * FROM invest
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

//PostInvest
async function postInvest(args){
  const {
    id_invest, numberCheck, typeOfCheck, typeofInvest, sumOfInvest, dateOfTheBegining, dateOfCompletion
  } = args;
  
  const sql = `
  INSERT INTO invest VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  
  const id = Number(id_invest);
  const params = [id, numberCheck, typeOfCheck, typeofInvest, sumOfInvest, dateOfTheBegining, dateOfCompletion];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM invest
      WHERE id_invest = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

//DeleteFromInvest
async function DeleteFromInvest(args){
  const {
    id_invest
  } = args;

  const sql = `
    DELETE FROM invest
    WHERE id_invest = ${id_invest}
  `;

  try{
    const result = await query(sql);
    return `Invest with id ${id_invest} was deleted!`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

//UpgradeInvest
async function UpgradeInvest(args){
  const {
    id_invest, numberCheck, typeOfCheck, typeofInvest, sumOfInvest, dateOfTheBegining, dateOfCompletion
  } = args;
  
  const sql = `
  UPDATE invest SET id_invest = $1, numberCheck = $2, typeOfCheck = $3 typeofInvest = $4, sumOfInvest = $5, dateOfTheBegining = $6, dateOfCompletion = $7
  WHERE id_invest = $1
  `;
  
  const id = Number(id_invest);
  const params = [id, numberCheck, typeOfCheck, typeofInvest, sumOfInvest, dateOfTheBegining, dateOfCompletion];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM invest
      WHERE id_invest = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllInvest, postInvest, DeleteFromInvest, UpgradeInvest}