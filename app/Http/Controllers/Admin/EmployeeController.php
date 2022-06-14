<?php


namespace App\Http\Controllers\Admin;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:employee');
    }
    public function addEmployeeView()
    {

        return view("admin.employee.add");
    }

    public function addEmployee(Request $request)
    {
        $employee = new Employee();
        $login = $request->input('login');
        if(Employee::where("login",$login)->first()){
            return view('admin.employee.add', ['error' => "Сотрудник с данным логином уже существует!"]);
        }

        $employee->login = $login;
        $employee->password = Hash::make($request->input('password'));
        $employee->email = $request->input('email');
        $employee->fio = $request->input('fio');
        $employee->dateOfBirth = $request->input('birthday');
        $employee->roleID = $request->input('role');
        $employee->gender = $request->input('gender');

        $saved = $employee->save();

        if (!$saved) {
            return view('admin.employee.add', ['error' => "Не удалось добавить нового сотрудника. Пожайлуйста, попробуйте еще раз!"]);
        }
        return view('admin.employee.add', ['success' => "Новый сотрудник успешно добавлен!"]);
    }
}
