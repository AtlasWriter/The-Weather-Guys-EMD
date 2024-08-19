// src/stormUpdate/stormUpdate.controller.ts
import { Request, Response } from 'express';
import { getAllStormUpdates, getStormUpdateById, createStormUpdate, updateStormUpdate, deleteStormUpdate } from './dao';

export const getAll = async (req: Request, res: Response) => {
  try {
    const updates = await getAllStormUpdates();
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch storm updates' });
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const update = await getStormUpdateById(id);
    res.json(update);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch storm update' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newUpdate = req.body;  // Extract data from request body
    console.log('Received storm update data:', newUpdate);  // Debug logging
    await createStormUpdate(newUpdate);  // Call DAO to create storm update
    res.status(201).json({ message: 'Storm update created successfully' });
  } catch (err) {
    console.error('Error creating storm update:', err);  // Log the error
    res.status(500).json({ error: 'Failed to create storm update' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;  // Extract ID from URL
    const updatedData = req.body;  // Extract the updated data from the request body
    console.log(`Updating storm update with id: ${id}`, updatedData);  // Debug logging

    await updateStormUpdate(id, updatedData);  // Call DAO to update the storm update

    res.status(200).json({ message: `Storm update with id ${id} updated successfully` });
  } catch (err) {
    console.error('Error updating storm update:', err);  // Log the error
    res.status(500).json({ error: 'Failed to update storm update' });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteStormUpdate(id);
    res.json({ message: 'Storm update deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete storm update' });
  }
};
