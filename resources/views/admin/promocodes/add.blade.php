@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h1>Добавить промокод</h1>
                <form id="loginForm" method="post" action="{{ route('promocodeAddMethod') }}">
                    @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название промокода</label>
                                <input type="text" value="{{ old('name') }}" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите название промокода">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Код промокода</label>
                                <input type="text" value="{{ old('code') }}" name="code" class="form-control" id="exampleInputPassword1" placeholder="Введите код промокода">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputPassword2">Скидка по промокоду</label>
                                <input type="text" value="{{ old('sale') }}" name="sale" class="form-control" id="exampleInputPassword2" placeholder="Скидка по промокоду в рублях">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputPassword3">Срок действия</label>
                                <input type="date" value="{{ old('die') }}" name="die" class="form-control" placeholder="Введите название промокода" id="exampleInputPassword3">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary btn-block">
                                    <input type="checkbox" name="onlynew" autocomplete="off"> Только для новых клиентов
                                </label>
                            </div>
                            <style>
                                .active {
                                    background-color: green !important;
                                    border: 1px solid green !important;
                                }
                            </style>
                        </div>
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-primary btn-block">Добавить промокод</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection


