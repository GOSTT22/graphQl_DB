const query = require('../DB/database');

//GetAllClients
async function getAllClients(args){
    const sql = `
    SELECT * FROM clients
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

//PostClients
async function postClients(args){
  const {
    id_client, fio, passportNomer, citizenship, country, city
  } = args;
  
  const sql = `
  INSERT INTO clients VALUES ($1, $2, $3, $4, $5, $6)
  `;
  
  const id = Number(id_client);
  const params = [id, fio, passportNomer, citizenship, country, city];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM clients
      WHERE id_client = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

//DeleteFromClients
async function deleteFromClients(args){
  const {
    id_client
  } = args;

  const sql = `
    DELETE FROM clients 
    WHERE id_client = ${id_client}
  `;

  try{
    const result = await query(sql);
    return `Client with id ${id_client} was deleted!`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

//UpgradeClients
async function upgradeClients(args){
  const {
    id_client, fio, passportNomer, citizenship, country, city
  } = args;
  
  const sql = `
  UPDATE clients SET id_client = $1, fio = $2, passportNomer = $3, citizenship = $4, country = $5, city = $6
  WHERE id_client = $1
  `;
  
  const id = Number(id_client);
  const params = [id, io, passportNomer, citizenship, country, city];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM clients
      WHERE id_client = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllClients, postClients, deleteFromClients, upgradeClients}