using HMOproject.Core.Entities;

namespace HMOproject.API.Models
{
    public class VaccinationPostModel
    {

        public DateTime DateOfVaccination { get; set; }
        public int CodeMan { get; set; }
        public int CodeMem { get; set; }
    }
}
