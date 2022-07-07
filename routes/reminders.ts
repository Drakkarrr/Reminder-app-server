import { Router } from "express";
import Reminder from "../models/reminder";
import CreateReminder from "../types/create-reminders";


const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
    res.json(reminders);
});

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminder;
    const reminder = new Reminder(title);
    reminders.push(reminder);

    return res.status(201).json(reminder);
})

export default router;