const query = require('../DB/database');

//GetAllCredit
async function getAllCredit(args){
    const sql = `
    SELECT * FROM credit
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

//PostCredit
async function postCredit(args){
  const {
    id_credit, typeOfCredit, sumOfcredit, percent, typeOfCurrency, dataOfissue, dataOfreturn
  } = args;
  
  const sql = `
  INSERT INTO credit VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  
  const id = Number(id_credit);
  const params = [id, typeOfCredit, sumOfcredit, percent, typeOfCurrency, dataOfissue, dataOfreturn];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM credit
      WHERE id_credit = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

//DeleteFromCredit
async function DeleteFromCredit(args){
  const {
    id_credit
  } = args;

  const sql = `
    DELETE FROM credit
    WHERE id_credit = ${id_credit}
  `;

  try{
    const result = await query(sql);
    return `Credit with id ${id_credit} was deleted!`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

//UpgradeCredit
async function UpgradeCredit(args){
  const {
    id_credit, typeOfCredit, sumOfcredit, percent, typeOfCurrency, dataOfissue, dataOfreturn
  } = args;
  
  const sql = `
  UPDATE credit SET id_credit = $1, typeOfCredit = $2, sumOfcredit= $3, percent= $4, typeOfCurrency= $5, dataOfissue= $6, dataOfreturn= $7
  WHERE id_credit = $1
  `;
  
  const id = Number(id_credit);
  const params = [id, typeOfCredit, sumOfcredit, percent, typeOfCurrency, dataOfissue, dataOfreturn];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM credit
      WHERE id_credit = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllCredit, postCredit, DeleteFromCredit, UpgradeCredit}