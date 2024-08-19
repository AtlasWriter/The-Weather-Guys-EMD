import { Request, Response } from 'express';
import { getAllSchoolClosings, getSchoolClosingById, createSchoolClosing, updateSchoolClosing, deleteSchoolClosing } from './dao';  // Import the DAO methods

export const getAll = async (req: Request, res: Response) => {
  try {
    const schoolClosings = await getAllSchoolClosings();
    res.status(200).json(schoolClosings);
  } catch (err) {
    console.error('Error fetching school closings:', err);
    res.status(500).json({ error: 'Failed to fetch school closings' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const schoolClosing = await getSchoolClosingById(id);
    if (schoolClosing) {
      res.status(200).json(schoolClosing);
    } else {
      res.status(404).json({ message: 'School closing not found' });
    }
  } catch (err) {
    console.error('Error fetching school closing by ID:', err);
    res.status(500).json({ error: 'Failed to fetch school closing' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newSchoolClosing = req.body;
    await createSchoolClosing(newSchoolClosing);
    res.status(201).json({ message: 'School closing created successfully' });
  } catch (err) {
    console.error('Error creating school closing:', err);
    res.status(500).json({ error: 'Failed to create school closing' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await updateSchoolClosing(id, updatedData);
    res.status(200).json({ message: `School closing with id ${id} updated successfully` });
  } catch (err) {
    console.error('Error updating school closing:', err);
    res.status(500).json({ error: 'Failed to update school closing' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteSchoolClosing(id);
    res.status(200).json({ message: `School closing with id ${id} deleted successfully` });
  } catch (err) {
    console.error('Error deleting school closing:', err);
    res.status(500).json({ error: 'Failed to delete school closing' });
  }
};
