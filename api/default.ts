const msg = "Hello world 2!";

export default function handler(req: any, res: any) {
  res.status(200).json({ msg: msg });
}
