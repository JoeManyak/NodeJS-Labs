const msg = "Хочу 60! :D";

export default function handler(req: any, res: any) {
  res.status(200).json({ msg: msg });
}
