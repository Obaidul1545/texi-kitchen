export async function GET(request) {
  return Response.json({
    status: 200,
    message: 'yahoo api created',
  });
}
export const feedback = [
  {
    id: 1,
    message: 'food is good',
  },
  {
    id: 2,
    message: 'nice place',
  },
];
