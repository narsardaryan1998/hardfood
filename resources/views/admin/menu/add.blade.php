@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div id="app" class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif

                <div class="row">
                    <a href="/admin/menu" class="btn float-left addSpan" aria-hidden="true"><i
                            class="fa fa-arrow-left"></i></a>
                    <h1 class="ml-3">Добавить новое меню</h1>
                </div>
                <div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                @if(isset($success))
                                    <div class="alert alert-success" role="alert">
                                        {{$success}}
                                    </div>
                                @elseif(isset($error))
                                    <div class="alert alert-danger" role="alert">
                                        {{$error}}
                                    </div>
                                @endif
                                <form method="post" action="{{ route('postMenuAdd') }}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Название меню</label>
                                                <input type="text" required value="" name="name" class="form-control"
                                                       id="exampleInputEmail1" aria-describedby="emailHelp"
                                                       placeholder="Введите название меню">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Калорийность</label>
                                                <input type="number" required step=".01" value="" name="kcal"
                                                       class="form-control" id="exampleInputPassword1"
                                                       placeholder="Введите количество килокалорий">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputPassword2">Белки</label>
                                                <input type="number" required step=".01" min="0" value=""
                                                       name="proteins" class="form-control" id="exampleInputPassword2"
                                                       placeholder="Введите количество белков">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputPassword3">Жиры</label>
                                                <input type="number" required step=".01" min="0" value="" name="fats"
                                                       class="form-control" placeholder="Введите количество жиров"
                                                       id="exampleInputPassword3">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputPassword4">Углеводы</label>
                                                <input type="number" value="" required name="carbohydrates" min="0"
                                                       class="form-control" placeholder="Введите количество углеводов"
                                                       id="exampleInputPassword4">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="url">Url изображения</label>
                                                <input type="text" value="" name="url"
                                                       class="form-control" placeholder="Укажите путь до изображения"
                                                       id="url">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="file" id="image" name="image" class="btn btn-primary w-100"/>
                                        </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="btn btn-success btn-block">Добавить блюдо
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection
