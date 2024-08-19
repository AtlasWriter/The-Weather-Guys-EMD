import { Request, Response } from 'express';
import { getAllShelters, getShelterById, createShelter, updateShelter, deleteShelter } from './dao';

export const getAll = async (req: Request, res: Response) => {
  try {
    const shelters = await getAllShelters();
    res.status(200).json(shelters);
  } catch (err) {
    console.error('Error fetching shelters:', err);
    res.status(500).json({ error: 'Failed to fetch shelters' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shelter = await getShelterById(id);
    if (shelter) {
      res.status(200).json(shelter);
    } else {
      res.status(404).json({ message: 'Shelter not found' });
    }
  } catch (err) {
    console.error('Error fetching shelter by ID:', err);
    res.status(500).json({ error: 'Failed to fetch shelter' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newShelter = req.body;
    await createShelter(newShelter);
    res.status(201).json({ message: 'Shelter created successfully' });
  } catch (err) {
    console.error('Error creating shelter:', err);
    res.status(500).json({ error: 'Failed to create shelter' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await updateShelter(id, updatedData);
    res.status(200).json({ message: `Shelter with id ${id} updated successfully` });
  } catch (err) {
    console.error('Error updating shelter:', err);
    res.status(500).json({ error: 'Failed to update shelter' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteShelter(id);
    res.status(200).json({ message: `Shelter with id ${id} deleted successfully` });
  } catch (err) {
    console.error('Error deleting shelter:', err);
    res.status(500).json({ error: 'Failed to delete shelter' });
  }
};
