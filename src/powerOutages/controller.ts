import { Request, Response } from 'express';
import { getAllPowerOutages, getPowerOutageById, createPowerOutage, updatePowerOutage, deletePowerOutage } from './dao';

export const getAll = async (req: Request, res: Response) => {
  try {
    const powerOutages = await getAllPowerOutages();
    res.status(200).json(powerOutages);
  } catch (err) {
    console.error('Error fetching power outages:', err);
    res.status(500).json({ error: 'Failed to fetch power outages' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const powerOutage = await getPowerOutageById(id);
    if (powerOutage) {
      res.status(200).json(powerOutage);
    } else {
      res.status(404).json({ message: 'Power outage not found' });
    }
  } catch (err) {
    console.error('Error fetching power outage by ID:', err);
    res.status(500).json({ error: 'Failed to fetch power outage' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newPowerOutage = req.body;
    await createPowerOutage(newPowerOutage);
    res.status(201).json({ message: 'Power outage created successfully' });
  } catch (err) {
    console.error('Error creating power outage:', err);
    res.status(500).json({ error: 'Failed to create power outage' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await updatePowerOutage(id, updatedData);
    res.status(200).json({ message: `Power outage with id ${id} updated successfully` });
  } catch (err) {
    console.error('Error updating power outage:', err);
    res.status(500).json({ error: 'Failed to update power outage' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deletePowerOutage(id);
    res.status(200).json({ message: `Power outage with id ${id} deleted successfully` });
  } catch (err) {
    console.error('Error deleting power outage:', err);
    res.status(500).json({ error: 'Failed to delete power outage' });
  }
};
