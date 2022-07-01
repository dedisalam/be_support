import { NextFunction, Request, Response } from 'express';
// import { createKecamatanService, createKotaKabService, createNegaraService, createProvinsiService } from '@services';

const getDashboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const negaraData = {
    //   data: {
    //     negara: [
    //       {
    //         id: 360,
    //         name: 'INDONESIA',
    //       },
    //     ],
    //   },
    // };
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export default getDashboard;
