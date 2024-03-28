﻿// <auto-generated />
using System;
using HMOproject.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HMOproject.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("HMOproject.Core.Entities.Manufacturer", b =>
                {
                    b.Property<int>("CodeMan")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CodeMan"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CodeMan");

                    b.ToTable("ManufacturerList");
                });

            modelBuilder.Entity("HMOproject.Core.Entities.Members", b =>
                {
                    b.Property<int>("CodeMem")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CodeMem"), 1L, 1);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Dob")
                        .HasColumnType("datetime2");

                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Ill")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MobilePhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Recovery")
                        .HasColumnType("datetime2");

                    b.Property<int>("countVac")
                        .HasColumnType("int");

                    b.HasKey("CodeMem");

                    b.ToTable("MembersList");
                });

            modelBuilder.Entity("HMOproject.Core.Entities.Vaccination", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("CodeMan")
                        .HasColumnType("int");

                    b.Property<int>("CodeMem")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfVaccination")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ManufacturerCodeMan")
                        .HasColumnType("int");

                    b.Property<int?>("MembersCodeMem")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ManufacturerCodeMan");

                    b.HasIndex("MembersCodeMem");

                    b.ToTable("VaccinationList");
                });

            modelBuilder.Entity("HMOproject.Core.Entities.Vaccination", b =>
                {
                    b.HasOne("HMOproject.Core.Entities.Manufacturer", "Manufacturer")
                        .WithMany("Vaccination")
                        .HasForeignKey("ManufacturerCodeMan");

                    b.HasOne("HMOproject.Core.Entities.Members", "Members")
                        .WithMany("Vaccination")
                        .HasForeignKey("MembersCodeMem");

                    b.Navigation("Manufacturer");

                    b.Navigation("Members");
                });

            modelBuilder.Entity("HMOproject.Core.Entities.Manufacturer", b =>
                {
                    b.Navigation("Vaccination");
                });

            modelBuilder.Entity("HMOproject.Core.Entities.Members", b =>
                {
                    b.Navigation("Vaccination");
                });
#pragma warning restore 612, 618
        }
    }
}
