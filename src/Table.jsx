import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

function A(props) {
  const biodata = [
    ["Name", props.Name],
    ["DateOfBirth", props.DateOfBirth],
    ["Gender", props.Gender],
    ["FathersName", props.FathersName],
    ["MothersName", props.MothersName],
    ["Qualification", props.Qualification],
    ["College", props.College],
    ["Location",props.Location],
    ["Email", props.Email],
    ["Phone", props.Phone],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-pink-500 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            BIO DATA
          </h1>

          <p className="text-purple-100 mt-2 text-lg">
            Personal Information
          </p>
        </div>

        {/* Bio Data Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-indigo-600">
                G
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mt-3">
              Gomathi R.
            </h2>

            <p className="text-indigo-100">
              Bachelor of Computer Applications
            </p>
          </div>

          {/* MUI Table */}
          <TableContainer component={Paper} elevation={0}>
            <Table>

              <TableBody>
                {biodata.map(([label, value], index) => (
                  <TableRow
                    key={label}
                    className={
                      index % 2 === 0
                        ? "bg-purple-50 hover:bg-purple-100 transition"
                        : "bg-white hover:bg-indigo-50 transition"
                    }
                  >
                    <TableCell
                      className="!font-bold !text-indigo-700 !w-1/3"
                    >
                      {label}
                    </TableCell>

                    <TableCell className="!text-gray-700">
                      {value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>

          {/* Footer */}
          <div className="p-5 bg-gray-50 text-center">
            <p className="text-gray-500 text-sm">
              Thank you for viewing my Bio Data
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default A;