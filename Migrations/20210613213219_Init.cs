using Microsoft.EntityFrameworkCore.Migrations;

namespace II_Shop.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Available",
                table: "Car");

            migrationBuilder.AddColumn<int>(
                name: "Stock",
                table: "Car",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Stock",
                table: "Car");

            migrationBuilder.AddColumn<bool>(
                name: "Available",
                table: "Car",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
