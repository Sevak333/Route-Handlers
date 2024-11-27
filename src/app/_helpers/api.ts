"use server";

import SQL from 'better-sqlite3'
import { IUser } from './types'


const db = new SQL("users.db")

export const getAllUsers = async (): Promise<IUser[]> => {
    return db.prepare('SELECT * FROM users')
        .all() as IUser[]
}

export const createUser = async (user: IUser) => {
    const stm = `INSERT INTO users(name,age,salary)
    VALUES (?,?,?)`
    db.prepare(stm).run(user.name, user.age, user.salary)

}

export const updateUser = async (id: number, user: IUser) => {
    const stm = `UPDATE users SET name = ?, age = ?, salary = ? WHERE id = ?`;
    db.prepare(stm).run(user.name, user.age, user.salary, id);
}

export const getUser = async (id: number): Promise<IUser | null> => {
    let user = db.prepare("SELECT * FROM users WHERE id = ?").get(id)
    if (user) {
        return user as IUser
    }
    return null
}


export const deleteUser = async (id: number) => {
    const stm = `DELETE FROM users WHERE id = ?`;
    db.prepare(stm).run(id);

};
