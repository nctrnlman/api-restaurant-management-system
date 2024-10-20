// Middleware untuk memformat respons
function formatResponse(req, res, next) {
  // Menambahkan method sendResponse ke objek respons
  res.sendResponse = (
    status, // Status dari respons (misalnya 'success' atau 'error')
    message, // Pesan yang menjelaskan respons
    data = null, // Data yang dikembalikan (default adalah null)
    errors = null, // Kesalahan yang mungkin terjadi (default adalah null)
    httpStatusCode = 200 // Kode status HTTP (default adalah 200 OK)
  ) => {
    // Mengirim respons JSON dengan status dan data yang diformat
    res.status(httpStatusCode).json({
      status, // Status dari respons
      message, // Pesan yang dikirim
      data, // Data yang dikirim
      errors, // Kesalahan yang dikirim
    });
  };

  // Melanjutkan ke middleware berikutnya
  next();
}

module.exports = formatResponse;
