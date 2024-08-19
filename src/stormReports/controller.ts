import { Request, Response } from 'express';
import { getAllStormReports, getStormReportById, createStormReport, updateStormReport, deleteStormReport } from './dao';

export const getAll = async (req: Request, res: Response) => {
  try {
    const stormReports = await getAllStormReports();
    res.status(200).json(stormReports);
  } catch (err) {
    console.error('Error fetching storm reports:', err);
    res.status(500).json({ error: 'Failed to fetch storm reports' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const stormReport = await getStormReportById(id);
    if (stormReport) {
      res.status(200).json(stormReport);
    } else {
      res.status(404).json({ message: 'Storm report not found' });
    }
  } catch (err) {
    console.error('Error fetching storm report by ID:', err);
    res.status(500).json({ error: 'Failed to fetch storm report' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newStormReport = req.body;
    await createStormReport(newStormReport);
    res.status(201).json({ message: 'Storm report created successfully' });
  } catch (err) {
    console.error('Error creating storm report:', err);
    res.status(500).json({ error: 'Failed to create storm report' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await updateStormReport(id, updatedData);
    res.status(200).json({ message: `Storm report with id ${id} updated successfully` });
  } catch (err) {
    console.error('Error updating storm report:', err);
    res.status(500).json({ error: 'Failed to update storm report' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteStormReport(id);
    res.status(200).json({ message: `Storm report with id ${id} deleted successfully` });
  } catch (err) {
    console.error('Error deleting storm report:', err);
    res.status(500).json({ error: 'Failed to delete storm report' });
  }
};
